import Vue from 'vue'
import { Container, Header, Main, Aside, Row, Col, Button, Form, FormItem, Select, Option, Input, Menu, MenuItem, Submenu, Card, Tag, Pagination, Timeline, TimelineItem, Image } from 'element-ui'

[Container, Header, Main, Aside, Row, Col, Button, Form, FormItem, Select, Option, Input, Menu, MenuItem, Submenu, Card, Tag, Pagination, Timeline, TimelineItem, Image].forEach((x) => Vue.use(x))
