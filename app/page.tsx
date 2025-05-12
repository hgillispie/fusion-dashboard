"use client";
import * as React from "react";
import { AppLayout } from "@/builder-components";
import { TopNavigation } from "@/builder-components";
import { SideNavigation } from "@/builder-components";
import { Button } from "@/builder-components";
import { BreadcrumbGroup } from "@/builder-components";
import { Header } from "@/builder-components";
import { TextFilter } from "@/builder-components";
import { Pagination } from "@/builder-components";
import { AreaChart } from "@/builder-components";
import { BarChart } from "@/builder-components";
import { Table } from "@/builder-components";

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <TopNavigation
          className="bg-slate-900"
          identity={{
            title: "LogoService name",
            href: "#",
          }}
          utilities={[
            {
              type: "button",
              text: "Link",
              href: "https://example.com/",
              external: true,
              externalIconAriaLabel: " (opens in a new tab)",
            },
            {
              type: "button",
              iconName: "notification",
              title: "Notifications",
              ariaLabel: "Notifications (unread)",
              badge: true,
              disableUtilityCollapse: false,
            },
            {
              type: "menu-dropdown",
              iconName: "settings",
              ariaLabel: "Settings",
              title: "Settings",
              items: [
                {
                  id: "settings-org",
                  text: "Organizational settings",
                },
                {
                  id: "settings-project",
                  text: "Project settings",
                },
              ],
            },
            {
              type: "menu-dropdown",
              text: "Customer Name",
              description: "email@example.com",
              iconName: "user-profile",
              items: [
                {
                  id: "profile",
                  text: "Profile",
                },
                {
                  id: "preferences",
                  text: "Preferences",
                },
                {
                  id: "security",
                  text: "Security",
                },
                {
                  id: "signout",
                  text: "Sign out",
                },
              ],
            },
          ]}
        />
        <AppLayout
          navigationOpen={false}
          navigation={
            <SideNavigation
              itemsControl={
                <Button
                  variant="normal"
                  className="flex items-start self-start w-full shadow-sm"
                />
              }
            />
          }
        >
          <div className="flex z-0 flex-col justify-between items-center self-center pb-10 max-w-full w-[1320px]">
            <div className="flex justify-between items-start w-full max-md:max-w-full">
              <div className="flex items-start min-w-60 w-[1280px]">
                <div className="flex-1 shrink w-full basis-0 min-w-60 max-md:max-w-full">
                  <div className="flex flex-col items-start pt-5 pb-6 w-full max-md:max-w-full">
                    <BreadcrumbGroup
                      ariaLabel="Breadcrumbs"
                      items={[
                        {
                          text: "Service",
                          href: "#",
                        },
                        {
                          text: "Administrative Dashboard",
                          href: "#",
                        },
                      ]}
                    />
                  </div>
                  <div className="pb-3 w-full rounded-2xl max-md:max-w-full">
                    <Header
                      variant="h1"
                      description="Collection description"
                      counter=""
                      actions={
                        <Button variant="primary" className="self-start">
                          Refresh Data
                        </Button>
                      }
                    >
                      Adminstration Dashboard
                    </Header>
                    <div className="flex flex-wrap gap-10 items-center mt-4 w-full max-md:max-w-full">
                      <TextFilter
                        filteringText="Placeholder"
                        className="flex-1 shrink basis-0"
                      />
                      <div className="flex gap-2 items-center self-stretch my-auto">
                        <Pagination currentPageIndex={1} pagesCount={5} />
                        <div className="flex shrink-0 self-stretch w-0.5 bg-gray-600 h-[34px]" />
                        <Button variant="icon" className="w-[26px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-20 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-2.5 justify-center items-center pt-10 pb-12 max-w-full w-[1246px]">
                <AreaChart
                  statusType="finished"
                  detailPopoverSize="medium"
                  className="flex-1 shrink basis-0"
                  series={[
                    {
                      title: "Network 1",
                      type: "area",
                      data: [
                        {
                          x: 1601017200000,
                          y: 114489,
                        },
                        {
                          x: 1601018100000,
                          y: 136935,
                        },
                        {
                          x: 1601019000000,
                          y: 141026,
                        },
                        {
                          x: 1601019900000,
                          y: 123288,
                        },
                        {
                          x: 1601020800000,
                          y: 121956,
                        },
                        {
                          x: 1601021700000,
                          y: 119868,
                        },
                        {
                          x: 1601022600000,
                          y: 132326,
                        },
                        {
                          x: 1601023500000,
                          y: 126879,
                        },
                        {
                          x: 1601024400000,
                          y: 138543,
                        },
                        {
                          x: 1601025300000,
                          y: 144309,
                        },
                        {
                          x: 1601026200000,
                          y: 121118,
                        },
                        {
                          x: 1601027100000,
                          y: 113430,
                        },
                        {
                          x: 1601028000000,
                          y: 135911,
                        },
                        {
                          x: 1601028900000,
                          y: 113126,
                        },
                        {
                          x: 1601029800000,
                          y: 119538,
                        },
                        {
                          x: 1601030700000,
                          y: 124338,
                        },
                        {
                          x: 1601031600000,
                          y: 133884,
                        },
                        {
                          x: 1601032500000,
                          y: 135473,
                        },
                        {
                          x: 1601033400000,
                          y: 131187,
                        },
                        {
                          x: 1601034300000,
                          y: 136176,
                        },
                        {
                          x: 1601035200000,
                          y: 144422,
                        },
                        {
                          x: 1601036100000,
                          y: 115392,
                        },
                        {
                          x: 1601037000000,
                          y: 139307,
                        },
                        {
                          x: 1601037900000,
                          y: 128517,
                        },
                        {
                          x: 1601038800000,
                          y: 107160,
                        },
                        {
                          x: 1601039700000,
                          y: 110283,
                        },
                        {
                          x: 1601040600000,
                          y: 134513,
                        },
                        {
                          x: 1601041500000,
                          y: 111311,
                        },
                        {
                          x: 1601042400000,
                          y: 142686,
                        },
                        {
                          x: 1601043300000,
                          y: 130652,
                        },
                        {
                          x: 1601044200000,
                          y: 149418,
                        },
                        {
                          x: 1601045100000,
                          y: 121923,
                        },
                      ],
                    },
                    {
                      title: "Network 2",
                      type: "area",
                      data: [
                        {
                          x: 1601017200000,
                          y: 10413,
                        },
                        {
                          x: 1601018100000,
                          y: 26582,
                        },
                        {
                          x: 1601019000000,
                          y: 45593,
                        },
                        {
                          x: 1601019900000,
                          y: 65918,
                        },
                        {
                          x: 1601020800000,
                          y: 76223,
                        },
                        {
                          x: 1601021700000,
                          y: 62385,
                        },
                        {
                          x: 1601022600000,
                          y: 83330,
                        },
                        {
                          x: 1601023500000,
                          y: 127209,
                        },
                        {
                          x: 1601024400000,
                          y: 104802,
                        },
                        {
                          x: 1601025300000,
                          y: 145899,
                        },
                        {
                          x: 1601026200000,
                          y: 121375,
                        },
                        {
                          x: 1601027100000,
                          y: 112968,
                        },
                        {
                          x: 1601028000000,
                          y: 145263,
                        },
                        {
                          x: 1601028900000,
                          y: 139562,
                        },
                        {
                          x: 1601029800000,
                          y: 128343,
                        },
                        {
                          x: 1601030700000,
                          y: 122774,
                        },
                        {
                          x: 1601031600000,
                          y: 145396,
                        },
                        {
                          x: 1601032500000,
                          y: 176509,
                        },
                        {
                          x: 1601033400000,
                          y: 201006,
                        },
                        {
                          x: 1601034300000,
                          y: 196538,
                        },
                        {
                          x: 1601035200000,
                          y: 213773,
                        },
                        {
                          x: 1601036100000,
                          y: 205076,
                        },
                        {
                          x: 1601037000000,
                          y: 216369,
                        },
                        {
                          x: 1601037900000,
                          y: 159386,
                        },
                        {
                          x: 1601038800000,
                          y: 238852,
                        },
                        {
                          x: 1601039700000,
                          y: 207500,
                        },
                        {
                          x: 1601040600000,
                          y: 187110,
                        },
                        {
                          x: 1601041500000,
                          y: 314165,
                        },
                        {
                          x: 1601042400000,
                          y: 165653,
                        },
                        {
                          x: 1601043300000,
                          y: 175584,
                        },
                        {
                          x: 1601044200000,
                          y: 230042,
                        },
                        {
                          x: 1601045100000,
                          y: 293879,
                        },
                      ],
                    },
                  ]}
                  hideFilter
                />
                <BarChart
                  statusType="finished"
                  className="flex-1 shrink basis-0"
                  series={[
                    {
                      title: "Site 1",
                      type: "bar",
                      data: [
                        {
                          x: 1601103600000,
                          y: 34503,
                        },
                        {
                          x: 1601110800000,
                          y: 25832,
                        },
                        {
                          x: 1601118000000,
                          y: 4012,
                        },
                        {
                          x: 1601125200000,
                          y: -5602,
                        },
                        {
                          x: 1601132400000,
                          y: 17839,
                        },
                      ],
                    },
                    {
                      title: "Average revenue",
                      type: "threshold",
                      y: 19104,
                    },
                  ]}
                  hideFilter
                />
              </div>
              <Table
                selectionType="multi"
                variant="container"
                columnDefinitions={[
                  {
                    id: "variable",
                    header: "Variable name",
                    sortingField: "name",
                    isRowHeader: true,
                  },
                  {
                    id: "value",
                    header: "Text value",
                    sortingField: "alt",
                  },
                  {
                    id: "type",
                    header: "Type",
                  },
                  {
                    id: "description",
                    header: "Description",
                  },
                ]}
                columnDisplay={[
                  {
                    id: "variable",
                    visible: true,
                  },
                  {
                    id: "value",
                    visible: true,
                  },
                  {
                    id: "type",
                    visible: true,
                  },
                  {
                    id: "description",
                    visible: true,
                  },
                ]}
                items={[
                  {
                    name: "Item 1",
                    alt: "First",
                    description: "This is the first item",
                    type: "1A",
                    size: "Small",
                  },
                  {
                    name: "Item 2",
                    alt: "Second",
                    description: "This is the second item",
                    type: "1B",
                    size: "Large",
                  },
                  {
                    name: "Item 3",
                    alt: "Third",
                    description: "-",
                    type: "1A",
                    size: "Large",
                  },
                  {
                    name: "Item 4",
                    alt: "Fourth",
                    description: "This is the fourth item",
                    type: "2A",
                    size: "Small",
                  },
                  {
                    name: "Item 5",
                    alt: "-",
                    description:
                      "This is the fifth item with a longer description",
                    type: "2A",
                    size: "Large",
                  },
                  {
                    name: "Item 6",
                    alt: "Sixth",
                    description: "This is the sixth item",
                    type: "1A",
                    size: "Small",
                  },
                ]}
              />
            </div>
          </div>
        </AppLayout>
      </div>
    </div>
  );
}
