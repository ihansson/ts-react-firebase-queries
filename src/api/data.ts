import firebase from "firebase/app";
import "firebase/firestore";
import { useState, useEffect, useRef, SetStateAction } from "react";

export interface Project {
  key: string;
  id: string;
  description: string;
}

export interface Task {
  key: string;
  id: string;
  text: string;
  due: string;
  uid: string;
  pid: string;
}

export function useGetProjects() {
  const db = firebase.firestore();
  const projectsRef = useRef(db.collection("projects"));

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [projects, setProjects] = useState([] as Array<Project>);

  useEffect(() => {
    const getProjectsWithFirebase = async () => {
      setLoading(true);
      setError("");
      try {
        const results = await projectsRef.current.get();
        const docs = results.docs as Array<any>;
        setProjects(
          docs.map((doc) => {
            return { key: doc.id, id: doc.id, ...doc.data() };
          })
        );
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    };
    getProjectsWithFirebase();
  }, [projectsRef]);

  return { loading, error, projects };
}

export function useGetProject(id: string) {
  const db = firebase.firestore();
  const projectsRef = useRef(db.collection("projects"));

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [project, setProject] = useState({} as Project);

  useEffect(() => {
    const getProjectWithFirebase = async () => {
      setLoading(true);
      setError("");
      try {
        const _project = await projectsRef.current.doc(id).get();

        setProject({
          key: _project.id,
          id: _project.id,
          ..._project.data(),
        } as SetStateAction<Project>);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    };
    getProjectWithFirebase();
  }, [id, projectsRef]);

  return [error, loading, project] as [string, boolean, Project];
}

export function useGetTasks(id: string) {
  const db = firebase.firestore();
  const tasksRef = useRef(db.collection("tasks"));

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [tasks, setTasks] = useState([] as Array<Task>);

  useEffect(() => {
    const getTasksWithFirebase = async () => {
      setLoading(true);
      setError("");
      try {
        const results = await tasksRef.current.get();
        const _tasks = results.docs as Array<any>;

        setTasks(
          _tasks.map((doc) => {
            return { key: doc.id, id: doc.id, ...doc.data() };
          })
        );
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    };
    getTasksWithFirebase();
  }, [id, tasksRef]);

  return [error, loading, tasks] as [string, boolean, Array<Task>];
}
