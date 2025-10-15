import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, AlertCircle } from 'lucide-react';
import { cn } from '~/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
  id?: string;
  name?: string;
  onChange?: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
}

const Select = ({
  options,
  value,
  placeholder = 'Select an option',
  disabled = false,
  required = false,
  error,
  label,
  id,
  name,
  onChange,
  onOpenChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const hasError = !!error;

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        onOpenChange?.(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOpenChange]);

  const handleSelect = (option: SelectOption) => {
    if (!option.disabled) {
      onChange?.(option.value);
      setIsOpen(false);
      onOpenChange?.(false);
    }
  };

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      onOpenChange?.(!isOpen);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-1"
      ref={selectRef}
    >
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          id={id}
          name={name}
          disabled={disabled}
          onClick={handleToggle}
          className={cn(
            'w-full px-3 py-2.5 bg-gray-700/50 border rounded-lg text-white focus:outline-none transition-colors text-left flex items-center justify-between',
            hasError
              ? 'border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400'
              : 'border-gray-600/50 focus:border-green-400 focus:ring-1 focus:ring-green-400',
            disabled && 'opacity-50 cursor-not-allowed',
            !selectedOption && 'text-gray-400'
          )}
        >
          <span>{selectedOption?.label || placeholder}</span>
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform',
              isOpen && 'rotate-180'
            )}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 w-full mt-1 bg-gray-800 border border-gray-600/50 rounded-lg shadow-xl max-h-60 overflow-auto"
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option)}
                  disabled={option.disabled}
                  className={cn(
                    'w-full px-3 py-2 text-left text-sm text-white hover:bg-gray-700/50 transition-colors flex items-center justify-between',
                    option.disabled && 'opacity-50 cursor-not-allowed',
                    value === option.value && 'bg-green-400/20 text-green-400'
                  )}
                >
                  <span>{option.label}</span>
                  {value === option.value && <Check className="w-4 h-4" />}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center text-sm text-red-400"
        >
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};

export { Select };
