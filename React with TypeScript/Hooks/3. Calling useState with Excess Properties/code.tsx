import { useState } from "react";

interface TagState {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
}

type GetTagState = () => TagState;

export const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });
  return (
    <div>
      {state.tags.map((tag): TagState => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState((currentState) => ({
                ...currentState,
                // @ts-expect-error
                tagselected: tag.id,
              }));
            }}
          >
            {tag.value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setState(
            (currentState): TagState => ({
              ...currentState,
              tags: [
                ...currentState.tags,
                {
                  id: new Date().getTime(),
                  value: "New",
                  // @ts-expect-error
                  otherValue: "something",
                },
              ],
            })
          );
        }}
      >
        Add Tag
      </button>
    </div>
  );
};
