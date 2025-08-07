import { Em, Heading, Link, Text, List, Image, Code, Blockquote } from "@chakra-ui/react";
import type { MDXComponents } from "mdx/types";

const spacing = { my: 1};

const components: MDXComponents = {
  h1: (props) => <Heading size="3xl" {...spacing} {...props} />,
  h2: (props) => <Heading size="2xl" {...spacing} {...props} />,
  h3: (props) => <Heading size="xl" {...spacing} {...props} />,
  p: (props) => <Text fontSize="sm" color="muted" {...props} />,
  a: (props) => <Link color="link" variant="underline" {...props} />,
  strong: (props) => <Text as="strong" color="gray.400" {...props} />,
  em: (props) => <Em {...props} />,
  ul: (props) => <List.Root pl={5} {...props} />,
  li: (props) => <List.Item paddingY={1} {...props} fontSize="md" />,
  img: (props) => <Image my={2} {...props} alt="" />,
  code: (props) => <Code {...props} variant="outline" />,
  blockquote: (props) => <Blockquote.Root colorPalette="blue"> <Blockquote.Content {...spacing} {...props} /> </Blockquote.Root>
}

export function useMDXComponents(): MDXComponents {
  return components;
}