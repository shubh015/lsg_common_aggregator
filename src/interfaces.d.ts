type Modify<T, R extends PartialAny<T>> = Omit<T, keyof R> & R
