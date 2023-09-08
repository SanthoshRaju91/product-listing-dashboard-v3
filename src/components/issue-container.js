import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverBody,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export function IssuesContainer({ issues }) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button fontSize="sm" variant="link" textColor="blue.700">
          Multiple Issues ({issues.length})
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <List spacing={1}>
            {issues.map((issue, index) => (
              <ListItem key={index} fontSize="xs">
                <ListIcon as={AiOutlineCloseCircle} color="red.500" />
                {issue}
              </ListItem>
            ))}
          </List>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
