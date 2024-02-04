"use client";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; // change to api call

  if (!data?.length && query?.search) {
    return <div>Try searching for something else...</div>;
  }

  if (!data?.length && query.favorites) {
    return <div>No Favorites</div>;
  }

  if (!data?.length) {
    return <div>No Boards at all!</div>;
  }
  return <div>{JSON.stringify(query)}</div>;
};
