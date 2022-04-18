import React from 'react'
import MediaCardBeginner from './Cards/BeginnerCard';
import MediaCardIntermediate from './Cards/IntermediateCard';
import MediaCardAdvanced from './Cards/AdvancedCard';
import '../CSS/tutorials.css'

export const ExcerciseDemo = () => {
  return (
    <div className="tutorials">
      <MediaCardBeginner/>
      <MediaCardIntermediate/>
      <MediaCardAdvanced/>
    </div>
    )
}
