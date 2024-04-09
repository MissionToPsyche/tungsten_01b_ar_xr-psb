const getEnumStringKeys = <T extends object>(enumObject: T): (keyof T)[] => {
  return Object.keys(enumObject).filter((key) =>
    isNaN(Number(key))
  ) as (keyof T)[];
};

export default getEnumStringKeys;
