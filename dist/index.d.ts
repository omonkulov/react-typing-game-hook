/**
 * Constants for different phases.
 * @enum {number}
 */
export declare enum PhaseType {
    /**
     * Phase when typing has yet to start.
     */
    NotStarted = 0,
    /**
     * Phase when typing has started.
     */
    Started = 1,
    /**
     * Phase when typing has ended.
     */
    Ended = 2
}
/**
 * Constants for different character states.
 * @enum {number}
 */
export declare enum CharStateType {
    /**
     * Character has yet to be determined to be correct or incorrect.
     */
    Incomplete = 0,
    /**
     * Character is determined to be correct.
     */
    Correct = 1,
    /**
     * Character is determined to be incorrect.
     */
    Incorrect = 2
}
declare type countErrorTypes = 'everytime' | 'once';
export interface TypingOptionsType {
    /**
     * Move on to the next word when space is inputted, defaults to `true`.
     */
    skipCurrentWordOnSpace: boolean;
    /**
     * Stay on the current index when the inputted character is wrong, defaults to `false`.
     */
    pauseOnError: boolean;
    /**
     * With `everytime`, choose to count errors everytime a mistake is made.
     * With `once`, choose to count errors only once for each mistake made.
     */
    countErrors: countErrorTypes;
}
/**
 * Properties of the typing game hook.
 */
export interface TypingStateType extends TypingOptionsType {
    /**
     * The inputted string to be used.
     */
    chars: string;
    /**
     * Array of each character's state in the string.
     * Each item in the array represents the state of each character in the string.
     * `0` represents incomplete, `1` represents correct and, `2` represents incorrect.
     */
    charsState: CharStateType[];
    /**
     * Length of the string used.
     */
    length: number;
    /**
     * Current index of the character the user have typed till.
     */
    currIndex: number;
    /**
     * Current character the user have typed till.
     */
    currChar: string;
    /**
     * Number of correct character the user had typed.
     */
    correctChar: number;
    /**
     * Number of incorrect character the user had typed.
     */
    errorChar: number;
    /**
     * Represent the current state.
     * `0` typing haven't started, `1` typing started, `2` typing ended.
     */
    phase: PhaseType;
    /**
     * Time in milliseconds when the typing started.
     */
    startTime: number | null;
    /**
     * Time in milliseconds when the typing ended.
     */
    endTime: number | null;
}
/**
 * Methods of the typing game hook.
 */
export interface TypingActionType {
    /**
     * Duration in milliseconds since the typing started.
     * 0 if the typing has yet to start.
     * When the typing ended, the duration will be equivalent to endTime - startTime.
     */
    getDuration: () => number;
    /**
     * Reset the typing sequence.
     */
    resetTyping: () => void;
    /**
     * Ends the typing sequence but not reset it.
     */
    endTyping: () => void;
    /**
     * Insert a character into the current typing sequence.
     * @param {string | null} char A character to be inserted.
     * If falsy or no argument is supplied, skip the current character.
     */
    insertTyping: (char?: string) => void;
    /**
     * Delete a character from the current typing sequence.
     * @param {boolean} [deleteWord] If `true`, deletes the whole of the current word. Defaults to `false`.
     */
    deleteTyping: (deleteWord?: boolean) => void;
    /**
     * Set the current index manually.
     * @param {number} num Allows from -1 to length - 1 of the text, numbers that falls outside of the range will return a false.
     */
    setCurrIndex: (num: number) => boolean;
}
/**
 * React hook to create typing challenge/game/practice/test.
 * @param {string} text A string of words to be used for the typing sequence.
 * @param {Object} [options] Addition options to customize the functionality of the typing sequence.
 * @param {boolean} [options.skipCurrentWordOnSpace] Move on to the next word when space is inputted, defaults to `true`.
 * @param {boolean} [options.pauseOnError] Stay on the current index when the inputted character is wrong, defaults to `false`.
 * @param {countErrorTypes} [options.countErrors]
 * @returns Returns the state and the actions available for the typing hook.
 */
declare const useTypingGame: (text: string, options?: Partial<TypingOptionsType>) => {
    states: TypingStateType;
    actions: TypingActionType;
};
export default useTypingGame;
