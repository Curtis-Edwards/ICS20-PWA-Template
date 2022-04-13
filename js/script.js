// Created by: Curtis Edwards
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check servie worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-x-yy/sw.js", {
    scope: "/ICS2O-UNIT-x-yy/",
  })
}

/**
 * This function displays an xxx.
 */
