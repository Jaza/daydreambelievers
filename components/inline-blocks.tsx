// TODO: get rid of this custom InlineBlocks once
// https://github.com/tinacms/tinacms/pull/1852 is merged

import { useCMS } from 'tinacms'
import {
  AddBlockMenu,
  BlocksContainerProps,
  BlocksEmptyState,
  InlineBlock,
  InlineBlocksContext,
  InlineBlocksProps,
  InlineField,
  useInlineForm,
} from 'react-tinacms-inline'

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
