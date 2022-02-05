import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'react-feather'
import './Selector.scss'
import { SelectorItem } from './types'


interface SelectorProps {
    selectedIdx: number
    candidates: SelectorItem[]
    onSelected: (idx: number) => void
    disabled?: boolean
    position?: 'top' | 'right' | 'bottom' | 'left'
}

const Selector: React.FC<SelectorProps> = ({ selectedIdx, candidates, onSelected, disabled, position = 'bottom' }) => {
    const targetRef = useRef(null)
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState('')
    
    useEffect(() => {
        if (candidates && candidates[selectedIdx]) {
            setSelected(candidates[selectedIdx].label.toString())
        }
    }, [candidates, selectedIdx, setSelected])
    
    useEffect(() => {
        
        const ref = targetRef.current
        
        const handler = (event: any) => {
            if (!ref) return
            
            if (!ref.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [setOpen])
    
    const onClickOpen = () => {
        if (disabled) return
        
        setOpen(!open)
    }
    
    const onItemClick = useCallback((index: number) => {
        if (disabled) return
        
        setSelected(candidates[index].label.toString())
        setOpen(false)
        onSelected(index)
    }, [disabled, setSelected, candidates, onSelected])
    
    const classNames = () => {
        return `boilerplate-selector ${disabled ? 'disabled' : ''}`
    }
    
    return (
        <div className={classNames()} ref={targetRef}>
            <div className='selected' onClick={onClickOpen}>
                <span>{selected}</span>
                <ChevronDown size={24}/>
            </div>
            {open && <div className={`candidates ${open ? 'active' : ''} ${position}`}>
                {candidates.map((item, idx) => {
                        return (
                            <div className='candidate' key={idx} onClick={() => onItemClick(idx)}>
                                <span>{item.label}</span>
                            </div>
                        )
                    }
                )}
            
            </div>}
        </div>
    )
}

export default Selector