import { Dropdown, message } from "antd"
import { useAuth } from "./context/auth-context"
import { ProjectListScreen } from "./screens/project-list"
import type { MenuProps } from "antd"
import styled from "@emotion/styled"

// 登陆状态
export const AuthenticatedApp = () => {
    const { logOut, user } = useAuth()
    const handleOut = () => {
        message.success("已退出")
        logOut()
    }
    const items: MenuProps["items"] = [{ key: "out", label: <>登出</> }]
    return (
        <Container>
            <Header>
                <div>XM-jira</div>
                <>
                    <Dropdown menu={{ items, onClick: handleOut }}>
                        <div style={{ color: "#40a9ff" }}>{user?.name}</div>
                    </Dropdown>
                </>
            </Header>
            <Nav></Nav>
            <Main>
                <ProjectListScreen></ProjectListScreen>
            </Main>
            <Aside></Aside>
            <Footer></Footer>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 6rem 1fr 6rem;
    grid-template-columns: 20rem 1fr 20rem;
    grid-template-areas:
        'header header header'
        'nav main aside'
        'footer footer footer';
    grid-gap: 1rem;
    height: 100vh;
`

const Header = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #efefef;
    padding: 0px 21rem;
    justify-content: space-between;
`

const Main = styled.main`
    grid-area: main;
`
const Nav = styled.nav`
    grid-area: nav;
`
const Aside = styled.aside`
    grid-area: aside;
`
const Footer = styled.footer`
    grid-area: footer;
`
