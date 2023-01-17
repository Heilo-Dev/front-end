import { useRouter } from "next/router";

type BtnPrimaryProps = {
  label: string;
  onClick?: () => {} | void;
  className?: string;
  link?: string;
};

export const BtnPrimary = ({
  label,
  onClick,
  className,
  link,
}: BtnPrimaryProps) => {
  const router = useRouter();
  return (
    <button
      onClick={link ? () => router.push(link) : onClick}
      className={`btnPrimary ${className}`}
    >
      {label}
    </button>
  );
};

type BtnSecondaryProps = {
  label: string;
  onClick?: () => {} | void;
  className?: string;
  link?: string;
};

export const BtnSecondary = ({
  label,
  onClick,
  className,
  link,
}: BtnSecondaryProps) => {
  const router = useRouter();
  return (
    <button
      onClick={link ? () => router.push(link) : onClick}
      className={`btnSecondary ${className}`}
    >
      {label}
    </button>
  );
};
