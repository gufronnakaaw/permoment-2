type RowProps = {
  children: React.ReactNode;
  label: string;
};

export default function Row({ children, label }: RowProps) {
  return (
    <tr>
      <td className="pr-5">{label}</td>
      <td className="w-full">{children}</td>
    </tr>
  );
}
