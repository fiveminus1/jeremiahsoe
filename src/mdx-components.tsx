import { Em, Heading, Link, Text, List, Image } from "@chakra-ui/react";
import type { MDXComponents } from "mdx/types";

const spacing = { my: 1};

const components: MDXComponents = {
  h1: (props) => <Heading size="3xl" {...spacing} {...props} />,
  h2: (props) => <Heading size="2xl" {...spacing} {...props} />,
  h3: (props) => <Heading size="xl" {...spacing} {...props} />,
  p: (props) => <Text fontSize="md" color="muted" {...props} />,
  a: (props) => <Link color="link" variant="underline" {...props} />,
  em: (props) => <Em {...props} />,
  ul: (props) => <List.Root pl={5} {...props} />,
  li: (props) => <List.Item paddingY={1} {...props} fontSize="md" />,
  img: (props) => <Image {...props} alt="" />
}

export function useMDXComponents(): MDXComponents {
  return components;
}