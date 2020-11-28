import firebase from "firebase/app";
import "firebase/firestore";
import {
  useState,
  useEffect,
  useRef,
  SetStateAction,
  useCallback,
} from "react";

export interface Project {
  key: string;
  id: string;
  description: string;
}

export interface Task {
  key: string;
  id: string;
  text: string;
  due: { seconds: number };
  status: string;
  uid: string;
  pid: string;
}

function useFirebaseCollection(collection: string, query: any) {
  const db = firebase.firestore();
  const collectionRef = useRef(db.collection(collection));

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const queryWithFirebase = async () => {
      setLoading(true);
      setError("");
      try {
        await query(collectionRef.current);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    };
    queryWithFirebase();
  }, [collectionRef, setError, setLoading, query]);

  return [error, loading] as [string, boolean];
}

export function useGetProjects() {
  const [projects, setProjects] = useState([] as Array<Project>);

  const query = useCallback(
    async (collectionRef: firebase.firestore.CollectionReference) => {
      const results = await collectionRef.get();
      const docs = results.docs as Array<any>;
      setProjects(
        docs.map((doc) => {
          return { key: doc.id, id: doc.id, ...doc.data() };
        })
      );
    },
    []
  );

  const [error, loading] = useFirebaseCollection("projects", query);

  return [error, loading, projects] as [string, boolean, Array<Project>];
}

export function useGetProject(id: string) {
  const [project, setProject] = useState({} as Project);

  const query = useCallback(
    async (collectionRef: firebase.firestore.CollectionReference) => {
      const _project = await collectionRef.doc(id).get();
      setProject({
        key: _project.id,
        id: _project.id,
        ..._project.data(),
      } as SetStateAction<Project>);
    },
    [id]
  );

  const [error, loading] = useFirebaseCollection("projects", query);

  return [error, loading, project] as [string, boolean, Project];
}

export function useGetTasks({
  userId = null,
  projectId = null,
}: {
  userId?: string | null;
  projectId?: string | null;
}) {
  const [tasks, setTasks] = useState([] as Array<Task>);

  const query = useCallback(
    async (collectionRef: firebase.firestore.CollectionReference) => {
      const results = await collectionRef
        .where(userId ? "uid" : "pid", "==", userId ? userId : projectId)
        .get();
      const _tasks = results.docs as Array<any>;

      setTasks(
        _tasks.map((doc) => {
          return { key: doc.id, id: doc.id, ...doc.data() };
        })
      );
    },
    [projectId, userId]
  );

  const [error, loading] = useFirebaseCollection("tasks", query);

  return [error, loading, tasks] as [string, boolean, Array<Task>];
}

export function useUpdateTask(taskId: string, status: string) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const updateTask = useCallback(
    (e) => {
      e.preventDefault();
      setSuccess(false);
      setError("");
      const doUpdateTask = async () => {
        setLoading(true);
        try {
          await firebase.firestore().collection("tasks").doc(taskId).update({
            status: status,
          });
          setSuccess(true);
        } catch (e) {
          setError(e.message);
        }
        setLoading(false);
      };
      doUpdateTask();
    },
    [taskId, status]
  );

  return { loading, success, error, updateTask };
}

export function useAddTask(
  projectId: string,
  text: string,
  assigned: string,
  due: string
) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const addTask = useCallback(
    (e) => {
      e.preventDefault();
      setSuccess(false);
      setError("");
      const doAddTask = async () => {
        setLoading(true);
        try {
          await firebase.firestore().collection("tasks").add({
            pid: projectId,
            uid: assigned,
            due: due,
            text: text,
            status: "open",
          });
          setSuccess(true);
        } catch (e) {
          setError(e.message);
        }
        setLoading(false);
      };
      doAddTask();
    },
    [projectId, text, assigned, due]
  );

  return { loading, success, error, addTask };
}
