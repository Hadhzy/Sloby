import { AiTwotoneFolder } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../store";
import { setProjectModal } from "../../store/dashboard/dashboardSlice";
import {
  FavoriteContainer,
  FavoriteProject,
  MainMenus,
  MenuItem,
  NewProjectButton,
  SlobyImage,
  SlobyMenuCategoryTitle,
  SlobyMenuContainer,
  UserDetails,
  UserName,
  ViewItem,
  ViewsContainer,
} from "../../utils/styles/Dashboard";
import { mainMenus, views } from "../../utils/temporaryAPI";
import { MainMenusObject, ViewsObject } from "../../utils/types";

function SlobyMenu() {
  // const { sloby_dashboard } = useContext(ContentContext);
  const dispatch = useDispatch<AppDispatch>();
  // const [value, setValues] = useState(false);

  return (
    <SlobyMenuContainer>
      <UserDetails>
        <SlobyImage src="https://content.invisioncic.com/a319035/monthly_2016_11/avatar.thumb.png.c68c113d40702f1cbaf0ff7fbb57ee46.png"></SlobyImage>
        <UserName>Gabor Hadhazy&aposs dashboard</UserName>
      </UserDetails>
      <div className="underline"></div>

      <MainMenus>
        {mainMenus.map((item: MainMenusObject) => {
          return (
            <Link to={item.path} className="off-link-dec" key={item.id}>
              <MenuItem id={item.title}>
                {item.icon}
                {item.title}
              </MenuItem>
            </Link>
          );
        })}
        <NewProjectButton onClick={() => dispatch(setProjectModal(true))}>New Project</NewProjectButton>
      </MainMenus>
      <ViewsContainer>
        <SlobyMenuCategoryTitle>Views</SlobyMenuCategoryTitle>
        {views.map((item: ViewsObject) => {
          return (
            <ViewItem key={item.id}>
              {item.icon}
              {item.title}
            </ViewItem>
          );
        })}
      </ViewsContainer>
      <FavoriteContainer>
        <FavoriteContainer>
          <SlobyMenuCategoryTitle>Favorite</SlobyMenuCategoryTitle>
          <FavoriteProject>
            <AiTwotoneFolder className="icon" />
            ProjectName
          </FavoriteProject>
        </FavoriteContainer>
      </FavoriteContainer>
    </SlobyMenuContainer>
  );
}

export default SlobyMenu;
