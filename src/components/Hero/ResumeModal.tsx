import { Button, Dialog, Portal, Link } from "@chakra-ui/react";
import { FaFilePdf } from "react-icons/fa";

const ResumeModal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">
          <FaFilePdf />
          View Resume
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            maxW="6xl"
            w="90vw"
            h="90vh"
            p={0}
            overflow="hidden"
          >
            <Dialog.Body p={0} h="full">
              <iframe 
                src="/resume.pdf" 
                title="Resume PDF"
                width="100%"
                height="100%"
                style={{ border: "none" }}
              />
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ResumeModal;