import {
  Box,
  type BoxProps,
  ListItem,
  type ListItemProps,
} from "@chakra-ui/react"
import React from "react"

const wordStyleVariants = {
  display: {
    borderBottom: "1px",
    borderColor: "body.medium",
    mt: 4,
    zIndex: 1,
  },
  complete: {
    borderRadius: "md",
    bg: "background.base",
    color: "body.base",
    border: "1px",
    borderColor: "body.base",
    px: 2,
  },
  active: {
    borderRadius: "md",
    bg: "background.base",
    color: "primary.base",
    border: "1px",
    borderColor: "primary.base",
    px: 2,
  },
  incomplete: {
    borderRadius: "md",
    bg: "background.base",
    color: "body.base",
    border: "1px",
    borderColor: "body.light",
    px: 2,
  },
  disabled: {
    borderRadius: "md",
    bg: "body.light",
    color: "body.medium",
    px: 2,
  },
} as const

export type WordStyleVariant = keyof typeof wordStyleVariants

interface IProps
  extends Pick<ListItemProps, "children">,
    Omit<BoxProps, "children"> {
  variant: WordStyleVariant
}

export const WordDisplay: React.FC<IProps> = ({
  children,
  variant,
  ...boxProps
}) => (
  <Box {...wordStyleVariants[variant]} {...boxProps}>
    <ListItem fontSize="sm" lineHeight={9} mb={0} listStylePos="inside">
      {children}
    </ListItem>
  </Box>
)
