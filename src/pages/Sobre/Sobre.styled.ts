import { styled, Grid, Typography } from "@mui/material";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaPen, FaBook, FaSearch } from "react-icons/fa";
import { TbListLetters } from "react-icons/tb";
import { PiListChecks } from "react-icons/pi";
import { IoShieldOutline } from "react-icons/io5";
import { ImParagraphLeft } from "react-icons/im";
import { MdOutlineBuildCircle } from "react-icons/md";
import { VscReplaceAll } from "react-icons/vsc";

export const Titulo = styled(Typography)(({theme}) => ({
    fontWeight: 600,
    fontSize: theme.spacing(1.8),
    marginTop: theme.spacing(2),
}));

export const Subtitulo = styled(Typography)(({theme}) => ({
    fontWeight: 600,
    fontSize: theme.spacing(1.3),
    marginTop: theme.spacing(2),
}));

export const Paragrafo = styled(Typography)(({theme}) => ({
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(1.2),
    textAlign: 'justify',
}));

export const Url = styled('a')(({theme}) => ({
    color: theme.palette.primary.dark,
    fontWeight: 500
}));

export const GridCards = styled(Grid)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    marginRight: theme.spacing(1.5),
    marginLeft: theme.spacing(0.7)
}));

export const LoginIcon = styled(RiLoginCircleLine)(({theme}) => ({
    fontSize: theme.spacing(1.5),
    color: theme.status.pink.light
}));

export const Comp1Icon = styled(FaPen)(({theme}) => ({
    fontSize: theme.spacing(1.3),
    color: theme.status.pink.light
}));

export const Comp2Icon = styled(FaBook)(({theme}) => ({
    fontSize: theme.spacing(1.3),
    color: theme.status.pink.light
}));

export const Comp3Icon = styled(FaSearch)(({theme}) => ({
    fontSize: theme.spacing(1.3),
    color: theme.status.pink.light
}));

export const Comp4Icon = styled(TbListLetters)(({theme}) => ({
    fontSize: theme.spacing(1.5),
    color: theme.status.pink.light
}));

export const Comp5Icon = styled(IoShieldOutline)(({theme}) => ({
    fontSize: theme.spacing(1.5),
    color: theme.status.pink.light
}));

export const NotasIcon = styled(PiListChecks)(({theme}) => ({
    fontSize: theme.spacing(1.5),
    color: theme.status.pink.light
}));

export const IntroIcon = styled(ImParagraphLeft)(({theme}) => ({
    fontSize: theme.spacing(1.3),
    color: theme.status.pink.light
}));

export const HomonIcon = styled(VscReplaceAll)(({theme}) => ({
    fontSize: theme.spacing(1.5),
    color: theme.status.pink.light
}));

export const UtilsIcon = styled(MdOutlineBuildCircle)(({theme}) => ({
    fontSize: theme.spacing(1.5),
    color: theme.status.pink.light
}));
