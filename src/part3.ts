type DeepKeys<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? K | `${K}.${DeepKeys<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never;

type Example = {
  user: {
    id: number;
    profile: {
      name: string;
    };
  };
  isAdmin: boolean;
};

type Result = DeepKeys<Example>;
