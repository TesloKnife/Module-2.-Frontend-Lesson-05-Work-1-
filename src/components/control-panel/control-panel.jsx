import { useState } from 'react';
import { Button } from '../buttons/button';
import styles from './control-panel.module.css';

export const ControlPanel = ({ onTodoAdd }) => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isSortingEnabled, setIsSortingEnabled] = useState(false);

	const onSearchPhraseChange = ({ target }) => {
		setSearchPhrase(target.value);
	};

	const onSortingChange = ({ target }) => {
		setIsSortingEnabled(target.checked);
	};

	return (
		<div className={styles.controlPanel}>
			<input
				className={styles.search}
				type="text"
				value={searchPhrase}
				placeholder="Поиск..."
				onChange={onSearchPhraseChange}
			/>
			<input
				className={styles.sortingButton}
				type="checkbox"
				checked={isSortingEnabled}
				onChange={onSortingChange}
			/>
			<Button onClick={onTodoAdd}>✚</Button>
		</div>
	);
};
