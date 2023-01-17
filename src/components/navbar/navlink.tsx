import Link from "next/link";

type Props = {
  label: string;
  link: string;
  mr0?: boolean;
};

const Navlink = ({ link, label, mr0 }: Props) => {
  return (
    <li>
      <Link className={`navlink ${mr0 ? "" : "mr-6"}`} href={link}>
        {label}
      </Link>
    </li>
  );
};

export default Navlink;
