# -*- coding: utf-8 -*-
"""
app.py
------
Ung dung ho tro quyet dinh dau tu AI cho Y te/Duoc/KHSS
"""
from datetime import date
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import streamlit as st
import data_pipeline as dp
import recommendation_engine as rec_engine
import roadmap_generator as roadmap

st.set_page_config(
    page_title="Dau tu AI trong Y te — He thong ho tro quyet dinh",
    layout="wide",
    page_icon="stethoscope",
)
print("TEST OK")
