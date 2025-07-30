import React from 'react';
import { useStore } from '../context/StoreContext';

const TemplateList = () => {
  const { templates, cart, purchased, addToCart } = useStore();

  return (
    <div className="template-list">
      {templates.map((template) => {
        const isInCart = cart.some((item) => item.id === template.id);
        const isPurchased = purchased.some((item) => item.id === template.id);
        return (
          <div key={template.id} className="template-card">
            <h3>{template.name}</h3>
            <p className="preview-text" style={{ fontFamily: template.name === 'Mono' ? 'monospace' : 'inherit' }}>
              {template.exampleText}
            </p>
            <p className="cost">{template.cost === 0 ? 'Free' : `${template.cost} coins`}</p>
            <button
              onClick={() => addToCart(template)}
              disabled={isInCart || isPurchased}
              className={isPurchased ? 'purchased' : ''}
            >
              {isPurchased ? 'Purchased' : isInCart ? 'In Cart' : 'Add to Cart'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TemplateList;
