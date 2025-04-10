import "@/common/components/tabButtons/style.scss";
import { tabs } from "@/common/constants/tabMenu";
import { TTab } from "@/common/interfaces/tab";

interface ITabButtonsProps {
    selectedTab: TTab;
    onSelect: React.Dispatch<React.SetStateAction<TTab>>;
};

const TabButtons = ({ selectedTab, onSelect }: ITabButtonsProps) => {
    return (
        <div className="tabs">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={`tabs__button ${selectedTab == tab.tabName && "tabs__button_active"}`}
                    onClick={() => onSelect(tab.tabName)}
                >
                    {tab.title}
                </button>
            ))}
        </div>
    )
};

export default TabButtons;