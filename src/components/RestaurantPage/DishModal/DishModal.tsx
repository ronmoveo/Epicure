import React, { useState, useRef, useEffect } from 'react';
import './DishModal.scss';
import { DishModalProps } from '../../../interfaces';
import { ADD_TO_BAG, CHANGES, QUANTITY } from '../../../utils/constants';

const DishModal: React.FC<DishModalProps> = ({ dish, onClose, onAddToCart }) => {
    const [selectedSide, setSelectedSide] = useState(dish.sideDish[0]);
    const [selectedChanges, setSelectedChanges] = useState<string[]>([]);
    const [quantity, setQuantity] = useState(1);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handleSideChange = (side: string) => {
        setSelectedSide(side);
    };

    const handleChangeToggle = (change: string) => {
        if (selectedChanges.includes(change)) {
            setSelectedChanges(selectedChanges.filter(c => c !== change));
        } else {
            setSelectedChanges([...selectedChanges, change]);
        }
    };

    const handleAddToCart = () => {
        const updatedDish = {
            ...dish,
            sideDish: [selectedSide],
            changes: selectedChanges,
            quantity,
        };
        onAddToCart(updatedDish);
        onClose();
    };

    return (
        <div className="dish-modal">
            <div className="dish-modal__content" ref={modalRef}>
                <div className="dish-modal__header">
                    <button className="dish-modal__close" onClick={onClose}>
                        <img src="/closeLogo.svg" alt="Close" />
                    </button>
                </div>
                <div className="dish-modal__image-container">
                    <img src={dish.photo} alt={dish.name} className="dish-modal__image" />
                </div>
                <div className="dish-modal__details">
                    <h2 className="dish-modal__name">{dish.name}</h2>
                    <div className="dish-modal__ingredients-container">
                        <p className="dish-modal__ingredients">{dish.ingredients.join(', ')}</p>
                    </div>
                    <div className="dish-modal__section">
                        <h3>Choose a side</h3>
                        <div className="dish-modal__options">
                            {dish.sideDish.map((side, idx) => (
                                <label key={idx} className="dish-modal__radio">
                                    <input
                                        type="radio"
                                        checked={selectedSide === side}
                                        onChange={() => handleSideChange(side)}
                                    />
                                    <span>{side}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="dish-modal__section">
                        <h3>{CHANGES}</h3>
                        <div className="dish-modal__options">
                            {dish.changes.map((change, idx) => (
                                <label key={idx} className="dish-modal__checkbox">
                                    <input
                                        type="checkbox"
                                        checked={selectedChanges.includes(change)}
                                        onChange={() => handleChangeToggle(change)}
                                    />
                                    <span>{change}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="dish-modal__section">
                        <h3>{QUANTITY}</h3>
                        <div className="dish-modal__quantity-controls">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                <img src="/minus.svg" alt="Decrease quantity" />
                            </button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}>
                                <img src="/plus.svg" alt="Increase quantity" />
                            </button>
                        </div>
                    </div>
                    <button className="dish-modal__add" onClick={handleAddToCart}>
                        {ADD_TO_BAG}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DishModal;