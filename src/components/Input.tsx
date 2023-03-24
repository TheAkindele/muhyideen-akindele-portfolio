import React, { useState } from "react";
import { InputHTMLAttributes, forwardRef, useMemo } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	errorMessage?: string;
	value?: any;
	setValue?: any
}

export const FloatingLabelInput = forwardRef<HTMLInputElement, InputProps>(
	(
		{ placeholder, type, label, value, setValue, errorMessage, ...rest },
		ref
	) => {

		return (
			<div className="input-container">
                <input 
                    type={type} 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                    className="bg-secondary text-primary"
                />
                <label className={`text-primary ${value && 'filled'}`} >
                    {label}
                </label>
			</div>
		);
	}
);