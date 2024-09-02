import React from "react";
import { cn } from "@/lib/utils";
import {
  FilterCheckbox,
  Title,
  RangeSlider,
  CheckboxFiltersGroup,
} from "@/components/shared";
import { Input } from "../ui";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Complete" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        className="mt-5"
        title="Формат"
        limit={6}
        defaultItems={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Солённые огурчики",
            value: "4",
          },
          {
            text: "Красный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Солённые огурчики",
            value: "4",
          },
          {
            text: "Красный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
          {
            text: "Сырный соус",
            value: "7",
          },
          {
            text: "Моццарелла",
            value: "8",
          },
          {
            text: "Чеснок",
            value: "9",
          },
          {
            text: "Солённые огурчики",
            value: "10",
          },
          {
            text: "Красный лук",
            value: "11",
          },
          {
            text: "Томаты",
            value: "12",
          },
        ]}
      />
    </div>
  );
};
