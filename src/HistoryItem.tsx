import { HistoryItem as HistoryItemType } from "./history";
import { TagsSelector } from "./TagsSelector";
export const HistoryItem = (props: {
  item: HistoryItemType;
  selected: string[];
  onTagSelect?: (tag: string, selected: boolean) => void;
}) => {
  const { item } = props;
  const tags = () => {
    return item.tags.map((tag) => ({
      tag,
      selected: props.selected.includes(tag),
    }));
  };
  return (
    <div class="flex flex-col border-slate-500 py-6 gap-2 print:break-inside-avoid">
      <h3 class="text-slate-900 text-xl font-bold font-sans">
        {item.company}
        <span class="text-gray-500 text-lg font-medium">
          {" "}
          - {item.position}
        </span>
      </h3>

      <p class="text-slate-500 text-md">
        {item.start === item.end
          ? item.start
          : [item.start, item.end].join(" - ")}
      </p>
      <p class="text-slate-700">{item.description}</p>
      <div />
      <div class="print:hidden">
        <TagsSelector tags={tags()} onTagSelect={props.onTagSelect} />
      </div>
    </div>
  );
};
