// TODO: get rid of this custom InlineBlocks once
// https://github.com/tinacms/tinacms/pull/1852 is merged

import * as React from 'react'
import { useCMS } from 'tinacms'
import {
  AddBlockMenu,
  Block,
  BlocksContainerProps,
  BlocksEmptyState,
  InlineBlock,
  InlineBlocksContext,
  InlineField,
  useInlineForm,
} from 'react-tinacms-inline'

export interface InlineBlocksProps {
  name: string
  blocks: {
    [key: string]: Block
  }
  className?: string
  direction?: 'vertical' | 'horizontal'
  /**
   * object will be spread to every block child element
   */
  itemProps?: {
    [key: string]: any
  }
  min?: number
  max?: number
  components?: {
    Container?: React.FunctionComponent<BlocksContainerProps>
  }
  children?: React.ReactNode | null
}

const DefaultContainer = (props: BlocksContainerProps) => {
  return <div {...props} />
}

export function InlineBlocks({
  name,
  blocks,
  className = '',
  direction = 'vertical',
  itemProps,
  min,
  max,
  components = {},
  children = null,
}: InlineBlocksProps) {
  const cms = useCMS()
  const { setFocussedField } = useInlineForm()

  return (
    <InlineField name={name}>
      {({ input, form }) => {
        const name = input.name
        const allData: { _template: string }[] = input.value || []

        const move = (from: number, to: number) => {
          form.mutators.move(name, from, to)
          setFocussedField(`${name}.${to}`)
        }

        const remove = (index: number) => {
          form.mutators.remove(name, index)

          const isOnlyItem = input.value.length === 1
          const isLastItem = input.value.length - 1 === index

          if (isOnlyItem) {
            setFocussedField('')
          } else if (isLastItem) {
            setFocussedField(`${input.name}.${index - 1}`)
          } else {
            setFocussedField(`${input.name}.${index}`)
          }
        }

        const insert = (index: number, block: any) => {
          form.mutators.insert(name, index, block)
          setFocussedField(`${name}.${index}`)
        }

        const duplicate = (sourceIndex: number, targetIndex: number) => {
          form.mutators.insert(name, targetIndex, allData[sourceIndex])
          setFocussedField(`${name}.${targetIndex}`)
        }

        const Container = components.Container || DefaultContainer

        return (
          <Container className={className}>
            <InlineBlocksContext.Provider
              value={{
                insert,
                duplicate,
                move,
                remove,
                blocks,
                count: allData.length,
                direction,
                min,
                max,
              }}
            >
              {allData.length < 1 && cms.enabled && (
                <BlocksEmptyState>
                  <AddBlockMenu
                    addBlock={block => insert(0, block)}
                    blocks={blocks}
                  />
                </BlocksEmptyState>
              )}

              {allData.map((data, index) => {
                const Block = blocks[data._template]

                if (!Block) {
                  console.warn('Unrecognized Block of type:', data._template)
                  return null
                }

                const blockName = `${input.name}.${index}`

                return (
                  <InlineBlock
                    itemProps={itemProps}
                    key={index}
                    index={index}
                    name={blockName}
                    data={data}
                    block={Block}
                  />
                )
              })}

              {children}
            </InlineBlocksContext.Provider>
          </Container>
        )
      }}
    </InlineField>
  )
}
