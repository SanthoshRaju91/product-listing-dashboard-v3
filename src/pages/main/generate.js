import { useState } from "react";
import { Box } from "@chakra-ui/react";

import { JobForm } from "../../components/job-form";

export default function Generate() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (jobName, itemPageUrl) => {};

  return (
    <Box w="60%" mx="auto">
      <JobForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
    </Box>
  );
}
