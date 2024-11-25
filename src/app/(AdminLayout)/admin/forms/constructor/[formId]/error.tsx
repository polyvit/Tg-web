"use client";
import { useEffect } from "react";
import Button from "../../../../../../components/Button";
import Link from "next/link";
import { ROUTES } from "../../../../../../utils/routes";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <h2 className="text-3xl mb-5">Что-то пошло не так</h2>
      <Button text="Домой">
        <Link href={ROUTES.ADMIN}>Вернуться на главную</Link>
      </Button>
    </div>
  );
}
