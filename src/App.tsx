import { createSignal, type Component } from "solid-js";
import { history, meta } from "./data";
import { HistoryItem } from "./HistoryItem";
import { TagsSelector } from "./TagsSelector";

const App: Component = () => {
  const [selected, setSelected] = createSignal<string[]>([]);
  const allTags = () => {
    return [...new Set(history.flatMap((item) => item.tags))]; //Make unique
  };

  const tags = () => {
    const selectedArr = selected();
    return allTags().map((tag) => ({
      tag,
      selected: selectedArr.includes(tag),
    }));
  };

  const onSelect = (tag: string, selected: boolean) => {
    if (selected) {
      setSelected((selected) => [...selected, tag]);
    }
    if (!selected) {
      setSelected((selected) => selected.filter((t) => t !== tag));
    }
  };

  const filteredHistory = () => {
    const selectedArr = selected();
    return history.filter((item) => {
      return selectedArr.every((tag) => item.tags.includes(tag));
    });
  };
  return (
    <div class="flex flex-col flex-1">
      <div class="flex bg-linear-to-br from-slate-800 to-slate-900 border-b-5 border-slate-500 justify-between align-center">
        <div class="flex flex-col px-8 py-12">
          <h1 class="font-sans text-white text-6xl lg:text-8xl font-bold">
            {meta.name}
          </h1>
          <h2 class="text-white text-xl lg:text-2xl font-bold">{meta.title}</h2>
        </div>
        <ul class="mx-8 flex flex-col rounded-md align-end text-slate-100 font-medium py-12 text-sm lg:text-lg text-right gap-1 lg:gap-2 justify-center">
          <li>{meta.location}</li>
          <li>{meta.phone}</li>
          <li>
            <a href={`mailto:${meta.email}`}>{meta.email}</a>
          </li>
        </ul>
      </div>
      <div class="flex flex-1">
        <div class="flex flex-col flex-1 gap-8">
          <div />
          <div class="flex px-8 flex-col">
            <p class="text-lg text-slate-700">{meta.profile}</p>
          </div>
          <div class="flex flex-col flex-1 px-8">
            <h3 class="text-slate-900 text-4xl font-bold font-sans mb-4">
              Projects
            </h3>
            {!filteredHistory().length && (
              <p class="text-slate-700 text-lg">
                Woops! Seems like I haven't used that particular combination
                yet.
              </p>
            )}
            {filteredHistory().map((item) => (
              <HistoryItem
                item={item}
                selected={selected()}
                onTagSelect={onSelect}
              />
            ))}
          </div>
        </div>
        <div class="sticky top-0 right-0 w-[256px] lg:w-sm flex flex-col bg-linear-to-br from-slate-100 to-slate-300 border-l-2 border-b-2 border-t-2 border-slate-200 p-4 gap-4 flex-grow-0 self-start rounded-bl-lg">
          <div class="flex flex-col gap-2">
            <h3 class="text-slate-900 text-xl font-bold font-sans">
              Education
            </h3>
            {meta.education.map((item) => (
              <p class="text-slate-700">
                <span class="font-semibold">{item.name}</span>
                <br />
                {item.institution}: {item.period}
              </p>
            ))}
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-slate-900 text-xl font-bold font-sans">
              Languages
            </h3>
            <p class="text-slate-700">{meta.languages.join(", ")}</p>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-slate-900 text-xl font-bold font-sans">Tags</h3>
            <TagsSelector tags={tags()} onTagSelect={onSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
