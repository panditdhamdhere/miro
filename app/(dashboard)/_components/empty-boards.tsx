"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";

export const EmptyBoards = () => {
  const { mutate, pending } = useApiMutation(api.board.create);
  const { organization } = useOrganization();
  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="Empty" width={110} height={110} />
      <h2 className="text-2xl font-semibold mt-6">Create Your First Board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        start by creating a board for your organization!
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create Board
        </Button>
      </div>
    </div>
  );
};
