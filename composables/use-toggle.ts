import {useStorage} from '@vueuse/core';

export const useToggle = () => {
    const isActive = useStorage('is-active', false);

    return {
        isActive,
    }
}
