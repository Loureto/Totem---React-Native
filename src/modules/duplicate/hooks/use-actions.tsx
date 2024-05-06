import { useCallback, useRef, useState } from "react";
import { useGetDuplicate } from "./use-get-duplicate";
import { UC } from "../models";

export const useActions = () => {
  const { data, isLoading } = useGetDuplicate();
  const [isChecked, setIsChecked] = useState<string[]>([]);
  const dataLengthRef = useRef<UC>();
  dataLengthRef.current = data;
  const isLengthsEqual =
    dataLengthRef.current?.invoice.length === isChecked.length;

  const AddInvoiceAll = useCallback(() => {
    const newChecked: string[] = [];

    if (!dataLengthRef.current) return;

    if (!isLengthsEqual) {
      dataLengthRef.current.invoice.filter((item) => {
        if (!isChecked.includes(String(item.id))) {
          newChecked.push(String(item.id));
        }
      });
      setIsChecked([...isChecked, ...newChecked]);
      return;
    }

    setIsChecked([]);
  }, [isChecked, isLengthsEqual]);

  const addInvoice = useCallback(
    (id: number) => {
      if (isChecked.includes(id.toString())) {
        const newChecked = isChecked.filter((item) => item !== id.toString());
        setIsChecked([...newChecked]);
        return;
      }
      setIsChecked([...isChecked, id.toString()]);
    },
    [isChecked]
  );

  return {
    data,
    isLoading,
    isChecked,
    isLengthsEqual,
    setIsChecked,
    AddInvoiceAll,
    addInvoice,
  };
};
