import { Box, Card, Heading, HStack, Image, Tag, Wrap, VStack } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box id="projects" display="flex" justifyContent="center" px={12}>
      <VStack>
        <Heading size="5xl" fontWeight="bold">
          Projects
        </Heading>

        <HStack maxWidth="100%">
          <Card.Root width="400px">
            <Image 
              src="https://cdn.discordapp.com/attachments/1164416239209295923/1392273564480176139/IMG_3026.jpeg?ex=686eef4c&is=686d9dcc&hm=53a3d8f213056bc1951fe7fda29951858d7e6a32a98e6a48e3d4906359c67330&" //todo: update hosting and image
              height="200px"
              width="400px"
            />
            <Card.Body>
              <VStack align="start">
                <Card.Title>Fabflix</Card.Title>
                <Card.Description>
                  Blah blah blah...
                </Card.Description>
                <Wrap>
                  <Tag.Root>
                    <Tag.Label>HTML</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>CSS</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>JavaScript</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>MySQL</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>Apache Tomcat</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>AWS</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>GCP</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>Docker</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>Kubernetes</Tag.Label>
                  </Tag.Root>
                </Wrap>
              </VStack>
            </Card.Body>
          </Card.Root>

          <Card.Root width="400px">
            <Image 
              src="https://cdn.discordapp.com/attachments/1164416239209295923/1392273564480176139/IMG_3026.jpeg?ex=686eef4c&is=686d9dcc&hm=53a3d8f213056bc1951fe7fda29951858d7e6a32a98e6a48e3d4906359c67330&" //todo: update hosting and image
              height="200px"
              width="400px"
            />
            <Card.Body>
              <VStack align="start">
                <Card.Title>Fabflix</Card.Title>
                <Card.Description>
                  Blah blah blah...
                </Card.Description>
                <Wrap>
                  <Tag.Root>
                    <Tag.Label>HTML</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>CSS</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>JavaScript</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>MySQL</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>Apache Tomcat</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>AWS</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>GCP</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>Docker</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>Kubernetes</Tag.Label>
                  </Tag.Root>
                </Wrap>
              </VStack>
            </Card.Body>
          </Card.Root>

                    <Card.Root width="400px">
            <Image 
              src="https://cdn.discordapp.com/attachments/1164416239209295923/1392273564480176139/IMG_3026.jpeg?ex=686eef4c&is=686d9dcc&hm=53a3d8f213056bc1951fe7fda29951858d7e6a32a98e6a48e3d4906359c67330&" //todo: update hosting and image
              height="200px"
              width="400px"
            />
            <Card.Body>
              <VStack align="start">
                <Card.Title>Fabflix</Card.Title>
                <Card.Description>
                  Blah blah blah...
                </Card.Description>
                <Wrap>
                  <Tag.Root>
                    <Tag.Label>HTML</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>CSS</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>JavaScript</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>MySQL</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>Apache Tomcat</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>AWS</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>GCP</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>Docker</Tag.Label>
                  </Tag.Root>
                  <Tag.Root>
                    <Tag.Label>Kubernetes</Tag.Label>
                  </Tag.Root>
                </Wrap>
              </VStack>
            </Card.Body>
          </Card.Root>
        </HStack>
      </VStack>
      
    </Box>
  );
};

export default Projects;