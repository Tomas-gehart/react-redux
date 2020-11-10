function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
}
function DropdownItem(props) {
  return (
    <a
      href="#"
      className="menu-item"
      onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
    >
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
}
 return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>App Academy</h2>
          </DropdownItem>

          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Channels</h2>
          </DropdownItem>
 
      </CSSTransition>
    </div>
  );
}

export default Dropdown;
