import { db } from './config';
import {collection, deleteDoc, getDoc, setDoc, addDoc, DocumentData} from 'firebase/firestore';

export async function addDocument(
    collectionName: string,
    data:object,
    docId?: string,
): Promise<string> {
    if (docId) {
        await setDoc(db, collectionName, docId, data);
        return docId;
    } else {
        const docRef = await addDoc(db, collectionName, data);
        return docRef.id;
}
}