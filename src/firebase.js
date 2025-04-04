import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDK9uLfXzPJ9T1FslLhYwcgYrWFVGOezsU',
	authDomain: 'productsproject-85d74.firebaseapp.com',
	projectId: 'productsproject-85d74',
	storageBucket: 'productsproject-85d74.firebasestorage.app',
	messagingSenderId: '207583533993',
	appId: '1:207583533993:web:13e202e4a63b12971f42b8',
	databaseURL: 'Адрес_базы_данных',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
