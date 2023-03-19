
import {useState} from 'react';
 interface Type {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
    onToggle: () => void;
}
export const useDisclose = ():Type => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
    const onToggle = () => setIsOpen(prev => !prev);
    return {isOpen, onClose, onOpen, onToggle};
};