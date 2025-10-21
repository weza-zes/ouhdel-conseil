export const goToPage = (to: string, options?: Object) => {
    const localePath = useLocalePath();
    return navigateTo(localePath(to), options);
};
