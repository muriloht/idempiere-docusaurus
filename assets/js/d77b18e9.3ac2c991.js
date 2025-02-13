"use strict";(self.webpackChunkidempiere_id_github_io=self.webpackChunkidempiere_id_github_io||[]).push([[68326],{67806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"basic-functional/vocabulary","title":"Vocabulary","description":"vocabulary}","source":"@site/docs/basic-functional/vocabulary.md","sourceDirName":"basic-functional","slug":"/basic-functional/vocabulary","permalink":"/docs/basic-functional/vocabulary","draft":false,"unlisted":false,"editUrl":"https://github.com/muriloht/idempiere.github.io/tree/main/docs/basic-functional/vocabulary.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Purpose","permalink":"/docs/basic-functional/introduction"},"next":{"title":"Login - Access to the system","permalink":"/docs/basic-functional/login"}}');var i=t(74848),o=t(28453);const r={sidebar_position:2},s="Vocabulary {#vocabulary}",c={},l=[{value:"Tenant Definition and Usage",id:"tenant",level:2},{value:"System Tenant",id:"tenant-system",level:2},{value:"Organization",id:"organization",level:2},{value:"Business Partner",id:"business-partner",level:2},{value:"Contact",id:"contact",level:2},{value:"User",id:"user",level:2},{value:"Role",id:"role",level:2},{value:"Charge",id:"charge",level:2},{value:"Product",id:"product",level:2},{value:"Accounting Schema",id:"accounting-schema",level:2},{value:"Account Element (Element Value)",id:"account-element",level:2}];function h(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"vocabulary",children:"Vocabulary"})}),"\n",(0,i.jsx)(n.p,{children:"This page defines basic terms you should know when using iDempiere. Consider bookmarking this page for future reference. Note that the order of terms is prioritized by relevance and importance to your learning (not the alphabet)."}),"\n",(0,i.jsx)(n.h2,{id:"tenant",children:"Tenant Definition and Usage"}),"\n",(0,i.jsx)(n.p,{children:"A Tenant (formerly known as Client) is a global consolidated collection of financial entities. iDempiere is multi-tenant. This means that completely separate groups of people can use the same instance of iDempiere for very different and unrelated purposes. Because different tenants are unrelated, they do not share any information with each other."}),"\n",(0,i.jsx)(n.p,{children:"In a simple scenario where you are a sole proprietor, you will have a single financial entity (Organization) in a single tenant. In a more complicated scenario where you are a multi-national collection of financial entities, you will have multiple financial entities (Organizations) in a single tenant."}),"\n",(0,i.jsx)(n.h2,{id:"tenant-system",children:"System Tenant"}),"\n",(0,i.jsx)(n.p,{children:'The "System" Tenant is a special tenant found in every instance of iDempiere. It holds the metadata used to define how iDempiere looks and functions.'}),"\n",(0,i.jsx)(n.h2,{id:"organization",children:"Organization"}),"\n",(0,i.jsx)(n.p,{children:'An Organization is a legal, financial or taxation entity inside a Tenant. It is most commonly referred to as a "set of books". An organization owns all financial things of value. Said another way, all records written to the general ledger will always be associated with an organization.'}),"\n",(0,i.jsx)(n.p,{children:"Here are additional important details about the Organization:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An Organization belongs to a Tenant."}),"\n",(0,i.jsx)(n.li,{children:"The Organization window contains a tree to help you structure the relationships between your organizations."}),"\n",(0,i.jsx)(n.li,{children:"The Organization window has a Summary check box field."}),"\n",(0,i.jsx)(n.li,{children:'Any organization whose Summary check box is checked is considered a "summary organization".'}),"\n",(0,i.jsx)(n.li,{children:'Any organization whose Summary check box is NOT checked is considered a "transactional organization".'}),"\n",(0,i.jsx)(n.li,{children:"Summary organizations are a financial consolidation point."}),"\n",(0,i.jsx)(n.li,{children:"You cannot post directly against a summary organization. Instead, summary organizations represent the sum of all postings against the transactional organizations that link to it via the Organization window tree."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'Organizations inside the same Tenant can share information. There exists a special Organization named "*" or commonly referred to as "star". While the "*" Organization is a real organization, it is commonly used to share data by convention. Said another way, if you wish to make a given record available to all users and records in your Tenant, assign that record the "*" Organization.'}),"\n",(0,i.jsx)(n.h2,{id:"business-partner",children:"Business Partner"}),"\n",(0,i.jsx)(n.p,{children:"A Business Partner is someone or something you transact with financially. Any given Business Partner can be flagged as either or all of the following roles: customer, vendor, employee, internal or external sales representative, or prospect. This means you no longer need to maintain duplicate records when a business partner plays multiple roles (example: both a customer and a vendor)."}),"\n",(0,i.jsx)(n.h2,{id:"contact",children:"Contact"}),"\n",(0,i.jsx)(n.p,{children:"A Contact is someone or something you communicate with. Contacts are most commonly found in the Business Partner window => Contact subtab."}),"\n",(0,i.jsx)(n.h2,{id:"user",children:"User"}),"\n",(0,i.jsx)(n.p,{children:"A User is a Contact that has the additional ability to log into iDempiere. Said another way, a User is a Contact, and a Contact is a User only if they can log into iDempiere. Users are most commonly found in the User window."}),"\n",(0,i.jsx)(n.p,{children:"Note that the User window includes all Users and Contacts for a given Tenant."}),"\n",(0,i.jsx)(n.h2,{id:"role",children:"Role"}),"\n",(0,i.jsx)(n.p,{children:"A Role defines the attributes and abilities of a User logging into an iDempiere session. A User can have many Roles. A User must choose one (and only one) Role during the login process. The User's iDempiere experience is defined by the chosen role during login."}),"\n",(0,i.jsx)(n.h2,{id:"charge",children:"Charge"}),"\n",(0,i.jsx)(n.p,{children:"A Charge is a facade for accounts in the Chart of Accounts (Account Element window => Element Value subtab). Charges are used in transactional windows such as the Invoice (Vendor) window and Physical Inventory window to code value to given accounts."}),"\n",(0,i.jsx)(n.p,{children:"It is commonly asked why the concept of a Charge exists. Asked another way, why not let the user simply choose the account directly? There are important reasons the Charge exists:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Charges give ERP Administrators the ability to provide meaningful names to actions an operator might perform where the operator would have no knowledge of the underlying GL account number or meaning. Example of a Charge name that means something to a warehouse operator: "Damaged Inventory (62300)". Example of a GL account name that might be meaningless to a warehouse operator: "62300 - Material Discrepancy".'}),"\n",(0,i.jsx)(n.li,{children:"Charges give you the ability to have multiple operator descriptions for the same GL account. Doing so ensures the correctly named options are available to operators in the right circumstances."}),"\n",(0,i.jsx)(n.li,{children:"iDempiere supports multiple Accounting Schemas (functional currencies) with multiple Account Elements (charts of accounts). This means that a transactional document can use a single Charge option regardless of the document's functional currencies. iDempiere knows exactly what account to use when posting to the respective functional currencies."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"product",children:"Product"}),"\n",(0,i.jsx)(n.p,{children:"A Product is used to represent many concepts in iDempiere. A Product can be:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A stocked product like a chair"}),"\n",(0,i.jsx)(n.li,{children:"A not-Stocked product like water"}),"\n",(0,i.jsx)(n.li,{children:"A service that you perform"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Products are similar to Charges in that they help the system map transactions to GL accounts; however, the Product architecture is much more involved. Products have the following added complexities over Charges:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Products depend on Price Lists"}),"\n",(0,i.jsx)(n.li,{children:"Products can maintain inventory levels"}),"\n",(0,i.jsx)(n.li,{children:"Products maintain costs"}),"\n",(0,i.jsx)(n.li,{children:"Products support Bills of Materials (BOM)"}),"\n",(0,i.jsx)(n.li,{children:"Products maintain multiple GL accounts (where a Charge maps to a single GL account)"}),"\n",(0,i.jsx)(n.li,{children:"Product GL account usage depends on how the Product is configured"}),"\n",(0,i.jsx)(n.li,{children:"Products are integrated with Assets and Resources"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Many windows give you a choice between using a Product or a Charge (Sales Order => Order Line subtab for example). If you do not know whether to use a Product or a Charge, start by using a Charge. It is more simple. Use Products when you have a requirement that cannot be solved by a Charge."}),"\n",(0,i.jsx)(n.h2,{id:"accounting-schema",children:"Accounting Schema"}),"\n",(0,i.jsx)(n.p,{children:"The Accounting Schema window is where you begin configuring iDempiere's accounting engine. In the Accounting Schema window, you will commonly set:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Currency"}),"\n",(0,i.jsx)(n.li,{children:"Default product Costing Method"}),"\n",(0,i.jsx)(n.li,{children:"Default product Costing Level (Client, Org, or Lot)"}),"\n",(0,i.jsx)(n.li,{children:"Accounting dimensions/segments (what values post to the general ledger along side the account number)"}),"\n",(0,i.jsx)(n.li,{children:"Posting defaults (what accounts to use related to Business Partners, Banks, Warehouses, etc...)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You may maintain as many Accounting Schemas as you deem appropriate. Here are common reasons to have more than one Accounting Schema record:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You maintain and report financials from more than one currency."}),"\n",(0,i.jsx)(n.li,{children:"You maintain and report financials from both 'Cash' and 'Accrual' costing methods."}),"\n",(0,i.jsx)(n.li,{children:"You meed to maintain multiple charts of accounts."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"account-element",children:"Account Element (Element Value)"}),"\n",(0,i.jsx)(n.p,{children:"The Account Element is the abstract class of the individual accounts for all financial accounting and other related activities, e.g. budgeting, internal cost accounting. Every business activity which creates or changes values in the company is normally reflected by accounting entries. In this context, it is important to note that the accounts are structured by the accounts tree. It defines which account is a base or root account for a specific value category and which other account is for accumulating the values of these root accounts and of other accumulation accounts. Also in the accounts definition it can be controlled which accounts can only be posted by automatic actions of the system e.g. by a production order, and which accounts are debited or credited by journal entries of the company staff."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(96540);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);