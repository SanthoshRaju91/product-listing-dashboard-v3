import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { toast } from "react-toastify";

import { JobForm } from "../../components/job-form";
import submit from "../../services/submit";

export default function Generate() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (jobName, itemPageUrl) => {
    setIsSubmitting(true);
    try {
      const response = await submit(jobName, itemPageUrl);
      toast.info(response);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box w="60%" mx="auto">
      <JobForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
    </Box>
  );
}
