import { ChakraProps, List, ListItem } from "@chakra-ui/react"
import ToCLink from "@/components/TableOfContents/TableOfContentsLink"
import type { ToCItem } from "@/lib/types"

export interface IPropsItemsList extends ChakraProps {
  items: Array<ToCItem>
  depth: number
  maxDepth: number
  activeHash?: string
}

const ItemsList: React.FC<IPropsItemsList> = ({
  items,
  depth,
  maxDepth,
  activeHash,
  ...rest
}) => {
  if (depth > maxDepth) return null

  return (
    <>
      {items.map((item, index) => {
        const { title, items } = item
        return (
          <ListItem key={index} m={0} {...rest}>
            <ToCLink depth={depth} item={item} activeHash={activeHash} />
            {items && (
              <List
                key={title}
                fontSize="sm"
                lineHeight={1.6}
                fontWeight={400}
                ps={4}
                pe={1}
                m={0}
              >
                <ItemsList
                  items={items}
                  depth={depth + 1}
                  maxDepth={maxDepth}
                  activeHash={activeHash} />
              </List>
            )}
          </ListItem>
        )
      })}
    </>
  )
}

ItemsList.displayName = "TocItemsList"

export default ItemsList
