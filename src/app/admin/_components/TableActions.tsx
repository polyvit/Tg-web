"use client";

import { useTransition } from "react";
import { deleteProduct, toggleAvailability } from "../_actions/products";
import DropdownItem from "../../../components/Dropdown/DropdownItem";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ROUTES } from "../../../utils/routes";

export function ToggleAvailabilityDropItem({
  id,
  canPurchase,
  setIsOpen,
}: {
  id: string | undefined;
  canPurchase: boolean | undefined;
  setIsOpen(a: (b: boolean) => boolean): void;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const clickHandler = () => {
    startTransition(async () => {
      if (id) {
        await toggleAvailability(id, !canPurchase);
      }
      setIsOpen((prev) => !prev);
      router.refresh();
    });
  };
  return (
    <DropdownItem
      text={canPurchase ? "Деактивировать" : "Активировать"}
      onClick={clickHandler}
    />
  );
}

export function DeleteDropItem({
  id,
  setIsOpen,
}: {
  id: string | undefined;
  setIsOpen(a: (b: boolean) => boolean): void;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const clickHandler = () => {
    startTransition(async () => {
      if (id) {
        await deleteProduct(id);
      }
      setIsOpen((prev) => !prev);
      router.refresh();
    });
  };
  return (
    <DropdownItem
      text="Удалить"
      onClick={clickHandler}
      className="text-red-500 hover:bg-red-100"
    />
  );
}

export function ChangeDropItem({ id }: { id: string | undefined }) {
  return (
    <Link href={`${ROUTES.PRODUCTS}/${id}/edit`}>
      <DropdownItem text="Изменить" />
    </Link>
  );
}
