import React from 'react';

type TechChipProps = {
  label: string;
};

const TechChip = ({ label }: TechChipProps) => (
  <span className="px-3 py-1 rounded-full bg-slate-900 text-sm mr-2 mb-1 inline-block">
    {label}
  </span>
);

export default TechChip;