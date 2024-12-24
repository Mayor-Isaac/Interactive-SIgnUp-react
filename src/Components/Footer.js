import React from 'react'
import { useDetails } from '../DetailsContext';

import Button from './Button';

export default function Footer() {
    const {stage, handleNextPage, handlePrevPage, tabs} = useDetails()
  return (
      <footer className="btn bokor-regular">
        {stage > 0 ? (
          <Button handleFunc={handlePrevPage} classGiven="prev">
            {stage === tabs.length ? "RESET" : "PREVIOUS"}
          </Button>
        ) : null}
        {stage < tabs.length && (
          <Button handleFunc={handleNextPage} classGiven="next">
            {stage === tabs.length - 1 ? "SUBMIT" : "NEXT"}
          </Button>
        )}
      </footer>
  );
}
