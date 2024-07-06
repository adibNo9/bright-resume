import { IUserCookie } from "@chatbot/cookie/user";
import { GetResumeByIdQuery, GetResumesQuery } from "@chatbot/gql/graphql";
import { ResumeSectionType } from "@models";
import { Dispatch, SetStateAction, createContext } from "react";

export interface IContext {
  user: IUserCookie;
  isOpenNewResumeDialog: boolean;
  setIsNewResumeDialog: Dispatch<SetStateAction<boolean>>;
  resumes: GetResumesQuery["getResumes"]["edges"];
  setResumes: Dispatch<SetStateAction<GetResumesQuery["getResumes"]["edges"]>>;
  selectedResume: GetResumeByIdQuery["getResumeById"] | undefined;
  setSelectedResume: Dispatch<
    SetStateAction<GetResumeByIdQuery["getResumeById"] | undefined>
  >;
  selectedResumeId: string;
  setSelectedResumeId: Dispatch<SetStateAction<string>>;
  loadingSelectedResume: boolean;
  loadingUpdateResume: boolean;
  updateResume: () => void;
  isCollapsedSideMenu: boolean;
  setIsCollapsedSideMenu: Dispatch<SetStateAction<boolean>>;
  isOpenChat: boolean;
  setIsOpenChat: Dispatch<SetStateAction<boolean>>;
  isOpenSteps: boolean;
  setIsOpenSteps: Dispatch<SetStateAction<boolean>>;
  initialLoading: boolean;
  setInitialLoading: Dispatch<SetStateAction<boolean>>;
  resumeSection: ResumeSectionType;
  setResumeSection: Dispatch<SetStateAction<ResumeSectionType>>;
  refetchSelectedResume: () => void;
  resumeSubSectionIndex: number | undefined;
  setResumeSubSectionIndex: Dispatch<SetStateAction<number | undefined>>;
}

export const Context = createContext<IContext>({
  user: {},
  isOpenNewResumeDialog: false,
  setIsNewResumeDialog: () => {},
  resumes: [],
  setResumes: () => {},
  selectedResume: undefined,
  setSelectedResume: () => {},
  selectedResumeId: "",
  setSelectedResumeId: () => {},
  loadingSelectedResume: false,
  loadingUpdateResume: false,
  updateResume: () => {},
  isCollapsedSideMenu: false,
  setIsCollapsedSideMenu: () => {},
  isOpenChat: false,
  setIsOpenChat: () => {},
  isOpenSteps: false,
  setIsOpenSteps: () => {},
  initialLoading: true,
  setInitialLoading: () => {},
  resumeSection: undefined,
  setResumeSection: () => {},
  refetchSelectedResume: () => {},
  resumeSubSectionIndex: undefined,
  setResumeSubSectionIndex: () => {},
});
